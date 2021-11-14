interface IProps {
    name: string;
}

const defaultProps = {
    age: 25,
};

const GreetComponent = ({ age, name }: IProps & typeof defaultProps) => (
    <div>{`Hello, my name is ${name}, ${age}`}</div>
);

GreetComponent.defaultProps = defaultProps;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
    return <h1 />;
};

const el = <TestComponent name="foo" />;

type ComponentProps<T> = T extends
    | React.ComponentType<infer P>
    | React.Component<infer P>
    ? JSX.LibraryManagedAttributes<T, P>
    : never;
