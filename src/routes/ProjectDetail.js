import { useEffect, useState } from "react";
import HomeLayout from "../components/HomeLayout";
import Loading from "../components/Loading";
import Error from "../components/Error";
import LaunchpadDetail from "../components/Detail/LaunchpadDetail";
import { useParams } from "react-router-dom";

export default function ProjectDetail(props) {
  let { id } = useParams();
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!!window?.contractIdo && !!id) getProject(id);
  }, [id]);

  const getProject = async (project_id) => {
    if (!project_id) return setIsError(true);
    try {
      await window?.contractIdo
        ?.get_project({ "project_id": +project_id })
        .then((_project) => {
          console.log("_project::", _project)
          setProject(_project);
        });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      return setIsError(true);
    }
  };

  return (
    <>
      {isError && <Error />}
      {isLoading && !isError && <Loading />}
      {!isLoading && <LaunchpadDetail project={project} />}
    </>
  );
}
