interface ExperienceProps {
  content: {
    title: string;
    jobs: {
      title: string;
      company: string;
      dateRange: string;
      responsibilities: string[];
    }[];
  };
}

export function Experience({ content }: ExperienceProps) {
  return (
    <section id="experiencia" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">{content.title}</h2> {/* */}
      <div className="max-w-4xl mx-auto space-y-8">
        {content.jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gray-900/90 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-purple-custom">{job.title}</h3>
            <p className="font-semibold text-white">{`${job.company} | ${job.dateRange}`}</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              {job.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}