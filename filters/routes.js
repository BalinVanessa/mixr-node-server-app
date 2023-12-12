function FilterRoutes(app) {
    const getFilters = async (req, res) => {
        const filters = req.session.filters;
        if (filters !== undefined) {
            res.json(filters);
        } else {
            res.json({
                alcoholic: null,
                ingredients: []
            });
        }
    }

    const setFilters = async(req, res) => {
        req.session.filters = req.body;
        res.json(`set filters to ${JSON.stringify(req.session.filters)}`);
    }

    app.get("/api/filters", getFilters);
    app.put("/api/filters", setFilters);
}

export default FilterRoutes;