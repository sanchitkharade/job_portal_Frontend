const AboutComp = (props: any) => {
    return (
      <div className="flex flex-col gap-5 p-5 bg-mine-shaft-900 shadow-md rounded-lg">
        {Object.keys(props.company).map(
          (key, index) =>
            !["id", "picture", "name"].includes(key) && ( // Excludes "id" & "picture"
              <div key={index}>
                <div className="text-xl mb-3 font-semibold capitalize">{key}</div>
  
                {/* Specialties - Render as list */}
                {key === "specialitis" ? (
                  <div className="text-sm text-mine-shaft-300 text-justify">
                    {props.company[key].map((item: string, index: number) => (
                      <span key={index}>&bull; {item} </span>
                    ))}
                  </div>
                ) : key === "website" ? (
                  <a
                    href={props.company[key]}
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm text-bright-sun-400 text-justify"
                  >
                    {props.company[key]}
                  </a>
                ) : (
                  <div className="text-sm text-mine-shaft-300 text-justify">{props.company[key]}</div>
                )}
              </div>
            )
        )}
      </div>
    );
  };
  
  export default AboutComp;
  