export default function successHandler(message: string, status: number, data: any) {
    return {
      data: data || undefined,
      message: message || 'Successful',
      status: status || 200,
    };
  }
