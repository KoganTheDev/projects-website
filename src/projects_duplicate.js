<div id="projects" className="projects">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>