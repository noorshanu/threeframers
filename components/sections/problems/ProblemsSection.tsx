import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { problemsWeSolve } from "@/lib/data/site"

export const ProblemsSection = () => {
  return (
    <section className="section-padding border-t border-border bg-surface">
      <Container>
        <FadeIn>
          <h2 className="font-display text-center text-[1.75rem] font-bold text-white sm:text-4xl">
            Problems we solve
          </h2>
          <p className="font-montserrat mx-auto mt-4 max-w-xl text-center text-sm text-body sm:text-base">
            We become your in house team, that you don&apos;t have to manage.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-4 md:mt-14">
          {problemsWeSolve.map((problem, index) => (
            <FadeIn key={problem} delay={index * 0.06}>
              <div className="mmh-card px-6 py-4 sm:px-8 sm:py-5">
                <p className="font-display text-base font-semibold text-white sm:text-lg">
                  {problem}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
