import { MainContainer } from './Container.styled';

type ContainerProps = {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps)  => {
  return <MainContainer  className='container'>{children}</MainContainer>
}