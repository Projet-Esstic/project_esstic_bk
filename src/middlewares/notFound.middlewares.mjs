
export const notFound = async (req, res) => {
    res.status(500).json({message: 'Not found'});
};