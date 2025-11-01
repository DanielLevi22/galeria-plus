import Container from "../components/container";
import { PhotosList } from "../contexts/photos/components/photo-list";

export default function PageHome() {
  return (
    <Container>
      <PhotosList loading={false} photo={[{}]} />
    </Container>
  );
}
