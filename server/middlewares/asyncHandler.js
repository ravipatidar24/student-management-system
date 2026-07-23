export const asyncHandler = (theFunction) => (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch((err) => {
        console.log("ASYNC ERROR CAUGHT:", err); 
        next(err);
    });
};