// Components
import { ReactComponent as DownloadIcon } from '../../assets/cloud-download-outline.svg';

// Styles
import classes from './content-modal.module.scss';

// Props type
type ContentModalProps = {
  body: string | undefined;
  files: string[] | undefined;
};

export function ContentModal({ body, files }: ContentModalProps): JSX.Element {
  const fetchFileHandler = async (file: string) => {
    const response = await fetch(`/api/files?filename=${file}`);
    console.log(response);
  };

  return (
    <>
      <p>{body}</p>
      <div>
        <b>Pliki</b>
      </div>
      {files ? (
        <ul className={classes.filelist}>
          {files.map((file) => (
            <li key={file}>
              <a
                className={classes.file}
                href={`http://localhost:8000/api/files?filename=${file}`}
                download>
                <span className={classes.icon}>
                  <DownloadIcon />
                </span>
                <span>{file}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        'Nie ma żadnych plików.'
      )}
    </>
  );
}
