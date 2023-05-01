import Manhattan from 'Views/Charts/Manhattan'
import RunRate from 'Views/Charts/RunRate'
import TypesOfRuns from 'Views/Charts/TypesOfRuns'
import Worm from 'Views/Charts/Worm'

function Analysis({ match }) {
    return (
        <div className='mx-auto text-center'>
            <div className='d-flex'>
                <TypesOfRuns match={match} />
                <RunRate match={match} />

            </div>
            {/* <Partnership match={match} /> */}
            <div className='d-flex'>
                <Manhattan match={match} />
                <Worm match={match} />
            </div>
        </div>
    )
}

export default Analysis
