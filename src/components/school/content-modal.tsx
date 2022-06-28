// Components
import { ReactComponent as DownloadIcon } from '../../assets/cloud-download-outline.svg';

// Styles
import classes from './content-modal.module.scss';

// Props type
type ContentModalProps = {
  body: string;
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
          {files.map((file, index) => {
            const filenameShortString = file.split('?')[0];
            const lastSlash = filenameShortString.lastIndexOf('/');
            const filename = filenameShortString.slice(lastSlash + 1);
            return (
              <li key={`file_${index}`}>
                <a className={classes.file} href={file} target='_blank'>
                  <span className={classes.icon}>
                    <DownloadIcon />
                  </span>
                  <span>{filename}</span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        'Nie ma żadnych plików.'
      )}
    </>
  );
}
