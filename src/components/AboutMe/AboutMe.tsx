import { Title } from "../Title/Title";

export const AboutMe = () => {
  return (
    <>
      <Title
        title={"about me"}
        color={"blue"}
        row={[
          [1, 2],
          [2, 3],
        ]}
      />
      <Title
        title={"susik love"}
        color={"blue"}
        row={[
          [1, 1],
          [2, 2],
        ]}
      />
    </>
  );
};
