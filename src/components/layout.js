import { DataProvider } from "@/context/useData";
import Footer from "./Footer";
import Header from "./Header";
import { LoaderProvider } from "@/context/useLoader";


export default function Layout({ children }) {
  return (
    <>

      <DataProvider>
        <LoaderProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoaderProvider>

      </DataProvider>

    </>
  )
}