import "./App.css"
import DashboardPage from "containers/DashboardPage"
import PageLayout from "containers/PageLayout"

function App() {
    return (
        <div className="App">
            <PageLayout>
                <DashboardPage />
            </PageLayout>
        </div>
    )
}

export default App
