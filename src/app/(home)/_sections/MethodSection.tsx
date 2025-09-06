import { getContent } from '@/lib/content';
import { MethodFlow } from '@/components/MethodFlow';

export default async function MethodSection() {
  const content = await getContent();
  const methodData = content.lessons.method;

  // Transform the data to match MethodStep interface
  const steps = methodData.steps.map(step => ({
    name: step.title,
    desc: step.description,
  }));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] bg-clip-text text-transparent">
              {methodData.title}
            </span>
          </h2>
        </div>
        
        <MethodFlow steps={steps} />
      </div>
    </section>
  );
}
