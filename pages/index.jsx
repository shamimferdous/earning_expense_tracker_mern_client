//importing components
import Layout from '../components/Layout'

const Index = (props) => {

  return (
    <>

    <Layout>
      <form className="landing-form" action="">
        <input style={{width: "40vw"}} className="binary-input" type="text" placeholder="Type Passcode and Hit Enter"/>
      </form>
    </Layout>

    </>
  );
}

export default Index;


