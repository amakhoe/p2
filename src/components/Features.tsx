import Eco from "@/assets/icons/ecosystem.svg"
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-2xl text-center font-bold -tracking-tighter">Tudo que precisares</h2>
        <p className="text-center mt-5 text-xl text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in
          One place. set tasks, get reminders, and see your progress simply and quickly
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
           {features.map(({title, description}) =>
                      <div key={title} className="border sm:flex-1 border-white/30 px-5 py-10 text-center rounded-xl">
                        <div className="rounded-lg inline-flex h-14 w-14 bg-white text-black justify-center items-center"><Eco /></div>
                        <h3 className="mt-6 font-bold">{title}</h3>
                        <p className="mt-2 text-white/70">{description}</p>
                        </div>
                      
                    )}
        </div>
      </div>
    </div>
  )
};
