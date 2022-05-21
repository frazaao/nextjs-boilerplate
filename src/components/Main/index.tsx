import * as S from './styles';

export default function Main({
  title = 'NextJS Boilerplate',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo src="img/reactIcon.svg" alt="Imagem de átomo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
