import axios from 'axios';

export function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  contextHandler: () => void
) {
  event.preventDefault();

  contextHandler();

  //   axios
  //     .get('')
  //     .then(resp => {})
  //     .catch(error => {
  //       console.log(error);
  //     });
}
