export default function guardrail(mathFunction) {
  const message = 'Guardrail was processed';
  const queue = [];

  try {
    const res = mathFunction();
    queue.push(res);
  } catch (e) {
    queue.push(`Error: ${(e).message}`);
  } finally {
    queue.push(message);
  }

  return queue;
}
