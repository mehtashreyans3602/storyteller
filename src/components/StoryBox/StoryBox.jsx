const StoryBox = ({ story }) => {
    return (
        <div className="flex p-4 text-justify font-thin mt-8">
            <p>{story}</p>
        </div>
    )
}

export default StoryBox;