import { Container, Bar } from './styles';

export function ProgressBar({ value }) {
  return (
    <Container>
      <Bar width={value} />
    </Container>
  );
}
