
export const Alert = (props) => {
    const { children, variant } = props;
  return (
    <>
        { children && (
            <div className={`alert alert-${variant ?? 'success'} py-1`} role="alert">
                { children }
            </div>
        )}
    </>
  )
}


