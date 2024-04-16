

export default async function RootLayout({ modal, children }) {


  return (

    <>
      {modal}
      {children}

    </>

  );
}
