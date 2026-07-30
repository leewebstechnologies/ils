import Image from "next/image";
import "./blog-details.css";
import FloatingButton from "@/app/components/floatingButton/FloatingButton";

type BlogDetailsProps = {
  slug: string;
};

const blogs = [
  {
    slug: "few-tips-for-getting-better-results",
    title: "Few Tips For Getting Better Results In Examination",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "25 Dec 2018",
    category: "Education",
    content: [
      `Success in examinations is not just about studying harder—it is about studying smarter and maintaining good habits. With the right preparation and mindset, you can improve your performance and achieve excellent results.
      One of the most important tips is to create a study timetable. A well-planned schedule helps you cover all your subjects without feeling overwhelmed. Break your study sessions into manageable periods and include short breaks to stay focused.
      Another key tip is to understand your lessons instead of memorizing them. When you understand concepts, it becomes easier to answer different types of questions and apply your knowledge in examinations.
      Practice with past examination questions whenever possible. This helps you become familiar with the exam format, improves your speed, and identifies areas where you need more revision.
      Avoid procrastination by starting your preparation early. Waiting until the last minute often leads to unnecessary stress and poor retention of information. Consistent daily study is far more effective than cramming the night before an exam.
      Finally, take care of your health. Get enough sleep, eat balanced meals, stay hydrated, and maintain a positive attitude. A healthy body and a calm mind improve concentration and memory, helping you perform at your best.
      By staying disciplined, studying consistently, and believing in your abilities, you can greatly improve your examination results and achieve your academic goals.`,
    ],
  },
  {
    slug: "learning-strategies",
    title: "Learning Strategies Every Student Should Know",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "28 Dec 2018",
    category: "Education",
    content: [
      `Every student has the potential to succeed, but achieving academic excellence requires more than just attending classes. Using effective learning strategies can improve understanding, boost confidence, and lead to better academic performance.
      One of the most effective strategies is setting clear learning goals. Having specific objectives helps you stay focused and measure your progress over time. Break larger goals into smaller, achievable tasks to make studying more manageable.
      Active learning is another powerful technique. Instead of simply reading your notes, ask questions, summarize key ideas, teach the concepts to someone else, or create mind maps. These methods help strengthen your understanding and improve long-term memory.
      Time management also plays a crucial role in academic success. Create a realistic study schedule, prioritize important tasks, and avoid procrastination. Studying consistently in short sessions is far more effective than cramming before an exam.
      Regular practice and revision are essential for retaining information. Review your notes frequently, complete assignments on time, and practice with quizzes or past examination questions to reinforce what you have learned.
      Finally, don't overlook the importance of maintaining a healthy lifestyle. Getting enough sleep, eating nutritious meals, exercising regularly, and taking short breaks while studying can improve concentration, memory, and overall productivity.
      By adopting these learning strategies and applying them consistently, students can develop stronger study habits, perform better in examinations, and build a solid foundation for lifelong learning.`,
    ],
  },
];

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="pt-90 pb-120">
        <div className="container">
          <h2>Blog not found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-details pt-90 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article className="blog-single">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={700}
                className="blog-image"
                priority
              />

              <div className="blog-body">
                <h1>{blog.title}</h1>

                <ul className="blog-meta">
                  <li>
                    <i className="fa fa-calendar"></i>
                    <span>{blog.date}</span>
                  </li>

                  <li>
                    <i className="fa fa-user"></i>
                    <span>{blog.author}</span>
                  </li>

                  <li>
                    <i className="fa fa-folder"></i>
                    <span>{blog.category}</span>
                  </li>
                </ul>

                {blog.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>

      <FloatingButton />
    </section>
  );
}
