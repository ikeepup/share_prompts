import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'SharePropmt',
  description: 'Discover & Share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Nav></Nav>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout