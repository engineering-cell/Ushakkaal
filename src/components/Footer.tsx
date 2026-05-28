import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-(--line) py-7 text-[14px] text-(--faint)">
      <Container>
        <div className="flex flex-wrap justify-between gap-5">
          <span>Ushakkaal</span>
          <span>A legacy in persuasion. A future in intelligence.</span>
        </div>
      </Container>
    </footer>
  );
}

