import React from 'react'


const AppRouter = () => {
   const [location, setLocation] = useState([]);
  const [uni, setUni] = useState([]);
  const [depertman, setDepertman] = useState([]);
 const [city, setCity] = useState([]);
const [uniId, setUniId] = useState([]);
const [filterDep, setFilterDep] = useState([]);
    const ApiKey =
    "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";
  const BASE_URL_LOCA = `https://tr-yös.com/api/v1/location/allcities.php?token=${ApiKey}`;
  const BASE_URL_UNI = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${ApiKey}`;
  const BASE_URL_DEP = `https://tr-yös.com/api/v1/record/alldepartments.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  
    const options1 = uni
      ?.filter((item) => cities.includes(item.city))
      .map((item) => ({
        value: item.code,
        label: item.tr,
      }));
      const getDep = async () => {
        try {
          const { data } = await axios(BASE_URL_DEP);
          setDepertman(data);
        } catch (error) {
          console.log(error);
        }
      };
      
  const getLoca = async () => {
    try {
      const { data } = await axios(BASE_URL_LOCA);
      setLocation(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(location);

  
        const options = location?.map((item) => ({
          value: item.id,
          label: item.tr,
        }));

           const getFilterDep = () => {
             return filterDep?.map((item) => item.value);
           };
           const filterDepss = getFilterDep();

  const getCities = () => {
    return city?.map((item) => item.value);
  };

  const cities = getCities();
  console.log(cities);

  const getUniId = () => {
    return uniId?.map((item) => item.value);
  };
console.log(uniId);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              options={options}
              options1={options1}
              options2={options2}
              setCity={setCity}
              setUniId={setUniId}
              setFilterDep={setFilterDep}
            />
          }
        />
        <Route path="/universities" element={<Uni uni={uni} />} />
        <Route
          path="/departments"
          element={
            <Departmens
              setFilterDep={setFilterDep}
              filterDep={filterDep}
              options={options}
              options1={options1}
              options2={options2}
              setCity={setCity}
              setUniId={setUniId}
              uniId={uniId}
              city={city}
              optionsCard={optionsCard}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;