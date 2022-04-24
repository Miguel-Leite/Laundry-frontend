import { NavMenu } from '../components/navMenu';
import { OwlMenu } from '../components/owl-menu';

export function Home() {
  return (
    <div>
      <div className='wrapper'>
        <NavMenu />
      </div>
      <div className='container'>
        <div className="wrapper-content">
          <div className='container'>
            <OwlMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

