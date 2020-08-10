import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function CustomFooter() {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        Built with ❤️ by{' '}
        <a
          href="https://onasanyatunde.codes"
          rel="noopener noreferrer"
          target="_blank"
        >
          Onasanya Babatunde
        </a>
        |
        <a
          href="https://github.com/rammyblog/MERN-Admin-Dashboard"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github Repo
        </a>
      </Footer>
    </div>
  );
}

export default CustomFooter;
