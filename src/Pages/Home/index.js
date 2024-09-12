import Layout from "../../Componets/Layout";
import { Tables } from "../../Componets/Tables";
import './index.css'


function Home({children}) {

    return(
        <Layout>
            <h1 className="principal-title">Currency ConVention</h1>
            <div className="contain-table">
                <section className="table-rate">
                    <Tables/>
                </section>
            </div>
        </Layout>
    )
}

export {Home};