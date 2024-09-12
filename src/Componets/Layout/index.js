function Layout({children}) {
    return(
        <div style={{display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#e8f6ff'
        }}>
            {children}
        </div>
    )
}

export default Layout;