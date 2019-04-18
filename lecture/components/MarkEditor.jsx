import React from 'react';
import MarkdownIt from 'markdown-it';
import './MarkEditor.less';

const md = new MarkdownIt();

const Preview = props => {
  return (
    <div
      className={'Preview'}
      dangerouslySetInnerHTML={{
        __html: md.render(props.value),
      }}
    />
  );
};

class MarkEditor extends React.Component {
  state = {
    value: `# 마크다운 에디터 만들기
      
      미리보기 영역
          this is code!
    
      ## 이것은 리스트
       
       * 리스트1
       * 리스트2
    `,
  };

  handleTextChange = ({target}) => {
    this.setState({
      value: target.value,
    });
  };

  render() {
    return (
      <div className={'MarkEditor'}>
        <h2>마크다운 에디터 예제</h2>
        <Preview value={this.state.value} />
        <textarea className={'Editor'} onChange={this.handleTextChange} />
      </div>
    );
  }
}

export default MarkEditor;
