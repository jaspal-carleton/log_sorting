# Log Sorting
Log sorting - Chronologically sort 'K log sources' where each log has 'N log entries'

<br>

## Description

We have a number of [**log sources**](https://github.com/jaspal-carleton/log_sorting/blob/master/lib/log-source.js).  Each log source contains N log entries.  Each entry is a javascript object with a timestamp and message.  We don't know the number of log entries each source contains - however - we do know that the entries within each source are sorted 🕒 **chronologically** 🕒.

### The Objectives:
1. ***Drain all of the log sources*** for both the synchronous and asynchronous solutions.
    - [Synchronous](https://github.com/jaspal-singh/log_sorting/lib/log-source.js#L37)
    - [Asynchronous](https://github.com/jaspal-singh/log_sorting/lib/log-source.js#L45)
1. Print all of the entries, across all of the sources, in chronological order.
    - We don't need to store the log entries, just print them to stdout.
1. Do this *efficiently*. There are time and space complexities afoot!

## Getting Started

### Dependencies

* bluebird
* Faker
* lodash
* jest

### Prerequisites

The app requires NodeJS and NPM to be installed on the system where this application will run.

* Verify if NodeJS and NPM is already installed on your system by executing following commands from the terminal. If installed then it will output the version number.

  ```sh
  node --version
  ```

  ```sh
  npm --version
  ```

* Otherwise, download and install NodeJS v15.0.0 from https://nodejs.org/download/release/v15.0.0/ based on your system OS. This will also install NPM by default along with NodeJS.

### Installing

1. Clone the repo
   ```sh
   git clone https://github.com/jaspal-carleton/log_sorting.git
   ```
2. Change directory to the project folder
   ```sh
   cd log_sorting
   ```
3. Install NodeJS modules or packages
   ```sh
   npm install
   ```

### Executing program

1. Run the app by executing following npm command from inside the project folder
   ```sh
   npm start
   ```

## Test Results

1. Synchronous
    - runSolutions(10)
    ***********************************
    Logs printed:		 2262
    Time taken (s):		 0.067
    Logs/s:			 33761.19402985075
    ***********************************
    ***********************************
    Logs printed:		 2452
    Time taken (s):		 0.074
    Logs/s:			 33135.13513513513
    ***********************************

    - runSolutions(100)
    ***********************************
    Logs printed:		 23993
    Time taken (s):		 0.334
    Logs/s:			 71835.32934131737
    ***********************************
    ***********************************
    Logs printed:		 24139
    Time taken (s):		 0.325
    Logs/s:			 74273.84615384616
    ***********************************

    - runSolutions(1000)
    ***********************************
    Logs printed:		 237934
    Time taken (s):		 2.514
    Logs/s:			 94643.59586316628
    ***********************************
    ***********************************
    Logs printed:		 238527
    Time taken (s):		 2.691
    Logs/s:			 88638.79598662208
    ***********************************

    - runSolutions(10000)
    ***********************************
    Logs printed:		 2386466
    Time taken (s):		 26.901
    Logs/s:			 88712.91030073231
    ***********************************
    ***********************************
    Logs printed:		 2393414
    Time taken (s):		 27.074
    Logs/s:			 88402.67415232326
    ***********************************

1. Asynchronous
    - runSolutions(10)
    ***********************************
    Logs printed:		 2434
    Time taken (s):		 0.068
    Logs/s:			 35794.11764705882
    ***********************************
    ***********************************
    Logs printed:		 2309
    Time taken (s):		 0.065
    Logs/s:			 35523.07692307692
    ***********************************

    - runSolutions(100)
    ***********************************
    Logs printed:		 23997
    Time taken (s):		 0.336
    Logs/s:			 71419.64285714286
    ***********************************
    ***********************************
    Logs printed:		 24341
    Time taken (s):		 0.348
    Logs/s:			 69945.40229885057
    ***********************************

    - runSolutions(1000)
    ***********************************
    Logs printed:		 238358
    Time taken (s):		 2.878
    Logs/s:			 82820.70882557331
    ***********************************
    ***********************************
    Logs printed:		 239626
    Time taken (s):		 2.806
    Logs/s:			 85397.71917320028
    ***********************************

    - runSolutions(10000)
    ***********************************
    Logs printed:		 2403871
    Time taken (s):		 34.235
    Logs/s:			 70216.76646706587
    ***********************************
    ***********************************
    Logs printed:		 2405670
    Time taken (s):		 32.168
    Logs/s:			 74784.56851529471
    ***********************************

