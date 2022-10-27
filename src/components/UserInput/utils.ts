export function split_response(req_data: any) {
  const request = req_data.choices[0].text.split('?');

  const question = request[0];
  const answer = request[1];

  return {
    question: question,
    answer: answer,
  };
}
