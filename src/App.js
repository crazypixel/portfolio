import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Page>
        <Title>Shay Keinan</Title>
        <Subtitle>
          Principle Front-end developer, consultant and public speaker.
        </Subtitle>

        <Sentence>
          Worked with small to large companies such as Autodesk,Via, BMW, New-Balance and NASA, to produce high quality Front-end experiences.
        </Sentence>

        <Grid>
          <Card src={require('./1.jpg')}><Tag>Talk</Tag></Card>
          <Card><Tag>Talk</Tag></Card>
          <Card><Tag>Talk</Tag></Card>
          <Card><Tag>Talk</Tag></Card>
        </Grid>
      </Page>
    );
  }
}

export default App;

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding: 100px;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: 'Sedgwick Ave Display', cursive;
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  max-width: 400px;
  color: #858585;
  margin-bottom: 10px;
`;

const Sentence = styled.div`
  font-size: 16px;
  font-weight: 300;
  max-width: 500px;
  color: #656565;
`;

const Grid = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: calc((100vw - 200px) / 2 - 5px);
  margin-bottom: 10px;
  height: 400px;
  background: #fafafa url(${({ src }) => src}) no-repeat;
  background-size: contain;
  box-sizing: border-box;
  position: relative;
`;

const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 4px 12px;
  border-radius: 4px;
  background: #8a8a8a;
  color: #fff;
  font-size: 12px;
`;
