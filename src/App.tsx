import { ReactElement, ReactNode } from "react";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import FunctionalComponent from "./components/FuntionalComponent/FunctionalComponent";
import List from "./components/List/List";

// Conventional props
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({ children }: { children: ReactNode }) {
  return (
    <h2>{children}</h2>
  )
}

// Default props
const defaultContainerProps = {
  heading: <strong>Next Step:</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children  }: ContainerProps): ReactElement {
  return (
    <div><h1>{heading}</h1>
    {children}</div>
  )
}
Container.defaultProps = defaultContainerProps;

function App() {
  return (
    <div>
      <Heading title="TypeScript Training"></Heading>
      <HeadingWithContent>
        <strong>Learning Conventional Props</strong>
      </HeadingWithContent>
      <Container>
        React Hooks!
      </Container>
      <FunctionalComponent>{(num: number) => <div>Increase the number | {num}</div>}</FunctionalComponent>
      <List items={["Tolga", "Simon", "Dark"]} render={(item: string) => <div>{item.toUpperCase()}</div>}
      ></List>
      <ClassComponent title="Class Component Setup">
      </ClassComponent>
    </div>
  );
}

export default App;
