function Section({keyName, data}) {
    return <div>
            <h3 className="SectionKey">{keyName}: </h3> <h3> {data}</h3>
        </div>
}

export default Section