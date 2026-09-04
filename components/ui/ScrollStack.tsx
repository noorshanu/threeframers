"use client"

import Lenis from "lenis"
import {
  useCallback,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react"

export type ScrollStackItemProps = {
  itemClassName?: string
  children: ReactNode
}

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: ScrollStackItemProps) => (
  <div
    className={`scroll-stack-card relative box-border w-full origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
)

type ScrollStackProps = {
  className?: string
  children: ReactNode
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

type CardTransform = {
  translateY: number
  scale: number
  rotation: number
  blur: number
}

export const ScrollStack = ({
  children,
  className = "",
  itemDistance = 200,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const stackCompletedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const cardTopsRef = useRef<number[]>([])
  const endTopRef = useRef(0)
  const scrollTopRef = useRef(0)
  const lastTransformsRef = useRef(new Map<number, CardTransform>())
  const isUpdatingRef = useRef(false)

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0
      if (scrollTop > end) return 1
      return (scrollTop - start) / (end - start)
    },
    [],
  )

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight
      }
      return parseFloat(String(value))
    },
    [],
  )

  const measureLayout = useCallback(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const cards = Array.from(
      container.querySelectorAll(".scroll-stack-card"),
    ) as HTMLElement[]

    cardsRef.current = cards

    const bottomPad = Math.round(
      window.innerHeight * 0.3 + itemStackDistance * Math.max(cards.length - 1, 0),
    )
    inner.style.paddingBottom = `${bottomPad}px`

    cards.forEach((card, i) => {
      card.style.transform = "none"
      card.style.filter = "none"
      card.style.marginBottom = i < cards.length - 1 ? `${itemDistance}px` : "0"
      card.style.zIndex = String(i + 1)
      card.style.willChange = "transform, filter"
      card.style.transformOrigin = "top center"
      card.style.backfaceVisibility = "hidden"
    })

    cardTopsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect()
      return rect.top + scrollTopRef.current
    })

    const endElement = container.querySelector(".scroll-stack-end")
    if (endElement) {
      const rect = endElement.getBoundingClientRect()
      endTopRef.current = rect.top + scrollTopRef.current
    }

    lastTransformsRef.current.clear()
  }, [itemDistance, itemStackDistance])

  const getScrollTop = useCallback(() => {
    if (useWindowScroll) {
      return scrollTopRef.current
    }
    return scrollerRef.current?.scrollTop ?? 0
  }, [useWindowScroll])

  const getContainerHeight = useCallback(() => {
    if (useWindowScroll) {
      return window.innerHeight
    }
    return scrollerRef.current?.clientHeight ?? 0
  }, [useWindowScroll])

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current
    const cardTops = cardTopsRef.current
    if (!cards.length || !cardTops.length || isUpdatingRef.current) return

    isUpdatingRef.current = true

    const scrollTop = getScrollTop()
    const containerHeight = getContainerHeight()
    const stackPositionPx = parsePercentage(stackPosition, containerHeight)
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight)
    const pinEnd = endTopRef.current - containerHeight / 2

    cards.forEach((card, i) => {
      const cardTop = cardTops[i]
      if (cardTop === undefined) return

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i
      const triggerEnd = cardTop - scaleEndPositionPx
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd)
      const targetScale = baseScale + i * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0

      let blur = 0
      if (blurAmount) {
        let topCardIndex = 0
        for (let j = 0; j < cards.length; j++) {
          const jTriggerStart =
            cardTops[j]! - stackPositionPx - itemStackDistance * j
          if (scrollTop >= jTriggerStart) topCardIndex = j
        }

        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount)
        }
      }

      let translateY = 0
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i
      }

      const newTransform: CardTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      }

      const lastTransform = lastTransformsRef.current.get(i)
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`
        card.style.filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : ""
        lastTransformsRef.current.set(i, newTransform)
      }

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })

    isUpdatingRef.current = false
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getContainerHeight,
    getScrollTop,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ])

  const handleScroll = useCallback(() => {
    updateCardTransforms()
  }, [updateCardTransforms])

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      })

      lenis.on("scroll", (instance: Lenis) => {
        scrollTopRef.current = instance.scroll
        handleScroll()
      })

      const raf = (time: number) => {
        lenis.raf(time)
        animationFrameRef.current = requestAnimationFrame(raf)
      }
      animationFrameRef.current = requestAnimationFrame(raf)
      lenisRef.current = lenis
      return lenis
    }

    const scroller = scrollerRef.current
    if (!scroller) return

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      gestureOrientation: "vertical",
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    })

    lenis.on("scroll", (instance: Lenis) => {
      scrollTopRef.current = instance.scroll
      handleScroll()
    })

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrameRef.current = requestAnimationFrame(raf)
    }
    animationFrameRef.current = requestAnimationFrame(raf)
    lenisRef.current = lenis
    return lenis
  }, [handleScroll, useWindowScroll])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (!useWindowScroll && !scrollerRef.current) return

    scrollTopRef.current = useWindowScroll
      ? window.scrollY
      : scrollerRef.current?.scrollTop ?? 0

    measureLayout()
    setupLenis()
    updateCardTransforms()

    const handleResize = () => {
      scrollTopRef.current = useWindowScroll
        ? window.scrollY
        : scrollerRef.current?.scrollTop ?? 0
      measureLayout()
      updateCardTransforms()
    }

    const handleNativeScroll = () => {
      scrollTopRef.current = useWindowScroll
        ? window.scrollY
        : scrollerRef.current?.scrollTop ?? 0
      handleScroll()
    }

    window.addEventListener("resize", handleResize)
    if (useWindowScroll) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true })
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (useWindowScroll) {
        window.removeEventListener("scroll", handleNativeScroll)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      lenisRef.current?.destroy()
      stackCompletedRef.current = false
      cardsRef.current = []
      cardTopsRef.current = []
      lastTransformsRef.current.clear()
      isUpdatingRef.current = false
    }
  }, [
    handleScroll,
    measureLayout,
    setupLenis,
    updateCardTransforms,
    useWindowScroll,
  ])

  const inner = (
    <div ref={innerRef} className="scroll-stack-inner pt-[10vh]">
      {children}
      <div className="scroll-stack-end h-px w-full" aria-hidden="true" />
    </div>
  )

  if (useWindowScroll) {
    return (
      <div
        ref={containerRef}
        className={`relative w-full ${className}`.trim()}
        data-scroll-stack
      >
        {inner}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-full w-full" data-scroll-stack>
      <div
        ref={scrollerRef}
        className={`relative h-full w-full overflow-x-visible overflow-y-auto ${className}`.trim()}
        style={{
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {inner}
      </div>
    </div>
  )
}

export default ScrollStack
