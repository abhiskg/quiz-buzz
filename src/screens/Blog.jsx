const Blog = () => {
  return (
    <div className="inner-width mx-auto">
      <h2 className="mt-8 text-center text-3xl font-bold">Blogs</h2>
      <div className="mt-10 rounded-md bg-secondary-100 p-3 shadow">
        <h2 className="text-lg font-medium">
          Q1: What is the purpose of react-router?
        </h2>
        <p>
          <span className="font-medium">Ans:</span>React Router is a standard
          library for routing in React. It allows us to build a single-page web
          application with navigation without the page refreshing as the user
          navigates. React Router uses component structure to call components,
          which display the appropriate information. React Router offers loader
          route to load any data directly to the UI without using any useEffect
          hook. It also offers errorElement to handle route errors. New version
          of react router introduces different hooks to improve productivity.
        </p>
      </div>
      <div className="mt-5  rounded-md bg-secondary-100 p-3 shadow">
        <h2 className="text-lg font-medium">Q2: How does context api work? </h2>
        <p>
          <span className="font-medium">Ans:</span> The React Context API is a
          way for a React app to effectively produce global variables that can
          be passed around. This is the alternative to "prop drilling" or moving
          props from grandparent to child to parent, and so on. Context is also
          considered as an easier, lighter approach to state management using
          Redux. To use context api First, we need to create the context, which
          we can later use to create providers and consumers. Provider is a
          component that as it's names suggests provides the state to its
          children. It will hold the "store" and be the parent of all the
          components that might need that store. Consumer as it so happens is a
          component that consumes and uses the state.
        </p>
      </div>
      <div className="my-5  rounded-md bg-secondary-100 p-3 shadow">
        <h2 className="text-lg font-medium">Q3: Explain useRef hook?</h2>
        <p>
          <span className="font-medium">Ans:</span> The useRef Hook allows you
          to persist values between renders. It can be used to store a mutable
          value that does not cause a re-render when updated. It can be used to
          access a DOM element directly. The useRef returns a mutable ref
          object. This object has a property called <strong>.current</strong>.
          The value is persisted in the refContainer.current property. These
          values are accessed from the current property of the returned object.
          The .current property could be initialised to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </p>
      </div>
    </div>

    // <div>
    //   <h1>Blog</h1>

    //   <div>What is the purpose of react-router?</div>
    //   <div>How does context api works?</div>
    //   <div>What is useRef hook?</div>
    // </div>
  );
};

export default Blog;
