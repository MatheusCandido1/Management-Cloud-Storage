import { Container } from './styles';
import { Header } from '../../Components/Header';
import { Dashboard } from '../Dashboard';
export function Main() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}
