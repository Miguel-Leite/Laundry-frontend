import { OwlMenu } from '../../components/owl-menu';
import { TableUser } from '../../components/tableUser';
import { Wrapper } from '../../components/Wrapper';

export function Home() {
  return (
    <div>
      <Wrapper />
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

