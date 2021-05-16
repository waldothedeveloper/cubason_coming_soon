import {
  PhoneIcon,
  AtSymbolIcon,
  DeviceMobileIcon,
  CakeIcon,
} from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="bg-blue-900 overflow-hidden">
      <div className="pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <span className="inline-flex items-center bg-gray-50 rounded-full p-0.5 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full">
                      Viene pronto mi gente...
                    </span>
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">CubaSon</span>{" "}
                    <span className="text-blue-400 md:block">
                      la mejor recarga para los cubanos
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Preparate para la mejor recarga de la historia ...no importa
                    la coyuntura y el drama de los precios en Etecsa...
                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                    Todo esto y mas...
                  </p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center items-center py-2 pr-1">
                        <DeviceMobileIcon
                          className="h-8 sm:h-9 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="text-gray-400 pl-2">
                          Recarga Celular
                        </span>
                      </div>
                      <div className="flex justify-center items-center py-2 pr-1">
                        <AtSymbolIcon
                          className="h-8 sm:h-9 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="text-gray-400 pl-2">
                          Recarga Nauta
                        </span>
                      </div>
                      <div className="flex justify-center items-center py-2 pr-1">
                        <PhoneIcon
                          className="h-8 sm:h-9 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="text-gray-400 pl-2">Llamadas</span>
                      </div>
                      <div className="flex justify-center items-center py-2 pr-1">
                        <CakeIcon
                          className="h-8 sm:h-9 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="text-gray-400 pl-2">Restaurantes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-xl sm:overflow-hidden">
                  <img
                    className="object-cover w-auto h-auto"
                    src="/cubason_abuela_cubana.png"
                    alt="abuela cubana hablando con su familia de USA"
                  />
                  <p className="text-gray-400 mt-1 ml-1 text-xs">
                    Foto por{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline"
                      href="https://unsplash.com/@robinnoguier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                      Robin Noguier
                    </a>{" "}
                    en{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline"
                      href="https://unsplash.com/s/photos/cuba-liquid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                      Unsplash.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
