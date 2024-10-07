
export function AppButton( props ) {
    const { disabled, loading, children, variant } = props;
  return (
    
        <button className={`btn btn-${variant ?? "primary"} text-white fw-bold`}
              disabled={disabled || loading}
              >
                {loading && (<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              )}
                {children}
          </button>
    
  )
}

