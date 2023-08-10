import Manhattan from 'Views/Charts/Manhattan'
import Partnership from 'Views/Charts/Partnership'
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
            <div className='d-flex'>
                <Manhattan match={match} />
                <Worm match={match} />
            </div>
            {/* <Partnership match={match} /> */}
        </div>
    )
}

export default Analysis
