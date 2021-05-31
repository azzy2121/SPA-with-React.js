import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Img from '.././assets/home.jpg'; 

const Home = () => {
    return (
        <main className="mainContent m-5">
            <img className="responsive-img" src={Img} alt=" bookstore" width="600" height="400" />
            <div className="m-3">
            <h1><span className="fas fa-bookmark"></span> Welcome to BOOK NOOK!</h1>
            <p className="lead">The <strong>BOOK NOOK</strong> Bookstore is a division of the <strong>Seneca College</strong> main bookstore located in the Newnham campus.
            Founded in 1990, <strong>BOOK NOOK</strong> is Canada's leading academic publisher and one of the largest college presses in North America. It has worked closely with Seneca College for over 30 years and offers all computer programming books with the latest updates.
            You can access our newest added book simply by clicking on <strong>"BUY NOW"</strong> below. </p>
            </div>
             <Button className="mb-5" color="org-l"><Link className="text-dark"  to="/shop">BUY NOW!</Link></Button>             
        </main>
    )
}

export default Home;