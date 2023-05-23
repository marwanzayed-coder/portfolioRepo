import { BlogCard } from "./ui/Card";
import Title from "./ui/Title";

const Content = () => {
  return (
    <div>
      <Title title="المقالات" dir="rtl" />
      <div className="mt-4">
        <BlogCard
          title="ايه هي نود"
          slug="what-is-node"
          desc="ايه هي نودو في المقال ده هنعرف معلومات عن نود و ايه هي"
        />
      </div>
    </div>
  );
};

export default Content;
