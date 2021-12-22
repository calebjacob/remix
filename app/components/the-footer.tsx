export default function TheFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container center">
        <p>&copy;{currentYear} - All rights reserved.</p>
      </div>
    </footer>
  );
}
