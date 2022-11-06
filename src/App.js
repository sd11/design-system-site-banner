import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const SiteWideBanner = (props) => {
  const { children, withClose, backgroundColor } = props;

  return (
    <div id="siteWideBanner">
      <div>
        <Container backgroundColor={backgroundColor}>
          { children }
          { withClose && <NoticeClose aria-controls="optus-breach-custome" aria-label="Dismiss"></NoticeClose> }
        </Container>
      </div>
    </div>
  );
}

const SearchInput = (props) => {
  const { placeholder, backgroundColor } = props;
  return (
    <Search backgroundColor={backgroundColor}>
      <input type="text" class="input" placeholder={placeholder ? 'search' : ''}/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </Search>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <h3>SiteWideBanner 1</h3>
        <SiteWideBanner withClose backgroundColor="#ffd34c">
          <Paragraph><strong>Optus breach customers: </strong>
            <a href="/transaction/replace-nsw-driver-licence-online">replace your driver licence online</a> or at a <a href="/service-centre">service centre</a>. <a href="/optus-breach">Read more</a>.
          </Paragraph>
        </SiteWideBanner>
      </div>
      <div>
        <h3>SiteWideBanner 2</h3>
        <SiteWideBanner backgroundColor="#f5e60c">
          <AlertIcon src={logo} alt="Alert Icon"/>
          <Paragraph hasIcon>AlertVisit COVID-19 advice for the latest information.</Paragraph>
        </SiteWideBanner>
      </div>
      <div>
        <h3>SearchInput 1</h3>
        <SearchInput placeholder/>
      </div>
      <div>
        <h3>SearchInput 2</h3>
        <SearchInput backgroundColor="#f2f2f2"/>
      </div>
    </div>
  );
}

export default App;

/** Styled Components */

const Container = styled.div`
  background-color: ${p => p.backgroundColor};
  padding-inline-end: 50px;
  position: relative;
  color: #242934;
  font-family: Gotham,Arial,sans-serif;
  font-size: 100%;
  padding-block: 1rem;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0 0 0 20px;

  ${p => p.hasIcon && `
    padding: 0;
    vertical-align: middle;
    display: inline-flex;
  `}

  a {
    color: #333;
  }
`;

const NoticeClose = styled.button`
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23242934'%3E%3Cpath d='M1.75.344.344 1.75 4.594 6l-4.25 4.25 1.406 1.406L6 7.406l4.25 4.25 1.406-1.406L7.406 6l4.25-4.25L10.25.344 6 4.594z'/%3E%3C/svg%3E") no-repeat 50%;
  block-size: 44px;
  border: 0;
  cursor: pointer;
  inline-size: 44px;
  inset-block-start: 50%;
  inset-inline-end: calc(20px - 1rem);
  padding: 0;
  position: absolute;
  transform: translateY(-50%);
`;

const AlertIcon = styled.img`
  padding-left:20px;
  width:40px;
  display:inline-flex;
  vertical-align:middle;
`;

const Search = styled.div`
  position: relative;
  width: 300px;

  input {
    background: ${ p => p.backgroundColor || 'white'};
    width: 100%;
    padding: 20px 60px 20px 20px;
    display: block;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 18px 0 18px 20px;
    z-index: 2;
  }
`;