function Copyright() {

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © Meet Me in STL
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    color: "black",
    padding: "10px 0",
    marginTop: "40px",
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    margin: "20px auto 40px",
    fontSize: "1.2rem",
    textAlign: "center",
  },
};

export default Copyright;